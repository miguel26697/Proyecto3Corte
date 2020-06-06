package Controlador;

import com.google.gson.Gson;
import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.List;
import modelo.Cliente;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import org.json.JSONObject;

public class Server extends WebSocketServer {

    private static List<Cliente> clients = new ArrayList<>();

    public Server() {
        super(new InetSocketAddress(30001));
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        String message = "";
        message = "{\"tipo\":\"conectado\"}";
        conn.send(message);
        System.out.println("New client connected: " + conn.getRemoteSocketAddress() + " hash " + conn.getRemoteSocketAddress().hashCode());
        Cliente cliente = new Cliente();
        cliente.setConn(conn);
        cliente.setHash(conn.getRemoteSocketAddress().hashCode());
        String object = "{\"tipo\":\"hash\",\"hash\":\"" + cliente.getHash() + "\",\"conectados\":[";
        for (int i = 0; i < clients.size(); i++) {
            object += "{\"usuario\": \"" + clients.get(i).getNombre() + "\"}";
            if (i < clients.size() - 1) {
                object += ",";
            }
        }
        object += "]}";
        conn.send(object);
        clients.add(cliente);

    }

    @Override
    public void onMessage(WebSocket conn, String message) {

        JSONObject obj = new JSONObject(message);
        String tipo = (String) obj.get("tipo");
        String object = "";
        switch (tipo) {
            case "ping":
                message = "pong";
                conn.send(message);
                break;
            case "nuevo":

                for (int i = 0; i < clients.size(); i++) {
                    if (clients.get(i).getHash() == Integer.parseInt(obj.getString("hash"))) {
                        clients.get(i).setNombre(obj.getString("usuario"));
                        object = "{\"tipo\":\"conexion\",\"hash\":\"" + clients.get(i).getHash() + "\",\"nombre\":\"" + clients.get(i).getNombre() + "\"}";
                        this.sendToAll(conn, object);
                        break;
                    }
                }
                break;

            case "salon":
                String idsalon="";
                idsalon= obj.getString("idsalon");
                System.out.println(""+idsalon); 
               break;

            default:
                break;
        }

    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {

        String message;
        message = "{\"tipo\":\"desconectado\"}";
        this.sendToAll(conn, message);
        System.out.println("Client " + code + " disconnected: " + reason);
        for (int i = 0; i < clients.size(); i++) {
            if (clients.get(i).getConn().equals(conn)) {
                clients.remove(i);
                break;
            }
        }
    }

    @Override
    public void onError(WebSocket conn, Exception exc) {
        System.out.println("Error happened: " + exc);
    }

    private void sendToAll(WebSocket conn, String message) {
        for (int i = 0; i < clients.size(); i++) {
            WebSocket c = (WebSocket) clients.get(i).getConn();
            c.send(message);
        }
    }

    public static void main(String[] args) {
        Server server = new Server();
        server.start();
    }

}
