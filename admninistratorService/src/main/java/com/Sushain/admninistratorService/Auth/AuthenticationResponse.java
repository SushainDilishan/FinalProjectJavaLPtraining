package com.Sushain.admninistratorService.Auth;

import lombok.AllArgsConstructor;
import lombok.Data;



public class AuthenticationResponse {

    private String authenticationToken;
    private String username;

    public AuthenticationResponse(String authenticationToken, String userName) {

    }


}
