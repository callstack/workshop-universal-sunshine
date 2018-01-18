package com.workshopuniversalsunshine;

import android.location.Address;
import android.location.Geocoder;
import android.location.Location;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class MyLocationModule extends ReactContextBaseJavaModule {

    private FusedLocationProviderClient mFusedLocationClient;

    public MyLocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(getReactApplicationContext());
    }

    @Override
    public String getName() {
        return "MyLocation";
    }

    @ReactMethod
    public void getCurrentLocation(final Promise promise) {
        mFusedLocationClient.getLastLocation()
                .addOnSuccessListener(getCurrentActivity(), new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {
                        // Got last known location. In some rare situations this can be null.
                        if (location != null) {
                            Geocoder geocoder = new Geocoder(getCurrentActivity(), Locale.getDefault());
                            List<Address> addresses;
                            try {
                                addresses = geocoder.getFromLocation(location.getLatitude(), location.getLongitude(), 1);
                                String cityName = addresses.get(0).getLocality();

                                WritableMap map = Arguments.createMap();

                                map.putDouble("latitude", location.getLatitude());
                                map.putDouble("longitude", location.getLongitude());
                                map.putString("cityName", cityName);

                                promise.resolve(map);
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }
                });
    }

}
