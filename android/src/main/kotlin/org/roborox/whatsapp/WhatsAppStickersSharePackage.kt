package org.roborox.whatsapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.JavaScriptModule
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class WhatsAppStickersSharePackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule>
            = listOf<NativeModule>(WhatsAppStickersShareModule(reactContext))

    override fun createJSModules(): MutableList<Class<out JavaScriptModule>>
            = mutableListOf()

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>>
            = emptyList()
}