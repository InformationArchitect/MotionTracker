package com.tns.gen.org.java_websocket.client;

public class WebSocketClient_ftns_modules_nativescript_websockets_websockets_l78_c60__ extends org.java_websocket.client.WebSocketClient implements com.tns.NativeScriptHashCodeProvider {
	public WebSocketClient_ftns_modules_nativescript_websockets_websockets_l78_c60__(java.net.URI param_0){
		super(param_0);
		com.tns.Runtime.initInstance(this);
	}

	public WebSocketClient_ftns_modules_nativescript_websockets_websockets_l78_c60__(java.net.URI param_0, org.java_websocket.drafts.Draft param_1){
		super(param_0, param_1);
		com.tns.Runtime.initInstance(this);
	}

	public WebSocketClient_ftns_modules_nativescript_websockets_websockets_l78_c60__(java.net.URI param_0, org.java_websocket.drafts.Draft param_1, int param_2){
		super(param_0, param_1, param_2);
		com.tns.Runtime.initInstance(this);
	}

	public WebSocketClient_ftns_modules_nativescript_websockets_websockets_l78_c60__(java.net.URI param_0, org.java_websocket.drafts.Draft param_1, java.util.Map param_2, int param_3){
		super(param_0, param_1, param_2, param_3);
		com.tns.Runtime.initInstance(this);
	}

	public void onOpen(org.java_websocket.handshake.ServerHandshake param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onOpen", void.class, args);
	}

	public void onClose(int param_0, java.lang.String param_1, boolean param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onClose", void.class, args);
	}

	public void onMessage(java.lang.String param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onMessage", void.class, args);
	}

	public void onMessage(java.nio.ByteBuffer param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onMessage", void.class, args);
	}

	public void onMessageBinary(java.nio.ByteBuffer param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onMessageBinary", void.class, args);
	}

	public void onPong()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onPong", void.class, args);
	}

	public void onError(java.lang.Exception param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onError", void.class, args);
	}

	public void onFragment(org.java_websocket.framing.Framedata param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onFragment", void.class, args);
	}

	public void onWebsocketHandshakeReceivedAsClient(org.java_websocket.WebSocket param_0, org.java_websocket.handshake.ClientHandshake param_1, org.java_websocket.handshake.ServerHandshake param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onWebsocketHandshakeReceivedAsClient", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
