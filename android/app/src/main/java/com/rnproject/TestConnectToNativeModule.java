package com.rnproject;

import android.app.Activity;
import android.content.Intent;
import android.telecom.Call;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestConnectToNativeModule extends ReactContextBaseJavaModule {

  public TestConnectToNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public String sendMessageToNative(String rnMessage) {
    Log.d("This log is from java", rnMessage);
      return rnMessage;
  }

  @ReactMethod
  public Callback sendCallbackToNative(Callback rnCallback) {
    rnCallback.invoke("A greeting from java");
      return rnCallback;
  }

  @ReactMethod
  Activity finishActivity() {
    return this.finishActivity();
  }

  @NonNull
  @Override
  public String getName() {
    return "TestConnectNative";
  }
}
