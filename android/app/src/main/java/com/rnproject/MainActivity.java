package com.rnproject;

import static android.os.Build.VERSION_CODES.R;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(com.rnproject.R.layout.activity_main);
        FloatingActionButton btnGoRNScreen = (FloatingActionButton) findViewById (com.rnproject.R.id.btnGoRNScreen);
        btnGoRNScreen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                next_page(view);
            }
        });
    }

    public void next_page(View v) {
        Log.d("messagetesttttttttttt", "messagetesttttttttttt");
        Intent intent = new Intent(this, RNActivity.class);
        EditText editText = (EditText) findViewById(com.rnproject.R.id.editTextNative) ;
        intent.putExtra("message_from_android_native", editText.getText().toString());
        startActivity(intent);
    }
}