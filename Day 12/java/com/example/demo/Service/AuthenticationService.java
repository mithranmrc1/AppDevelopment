package com.example.demo.Service;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.Builder;
import com.example.demo.Model.UserRegister;
import com.example.demo.Model.enumerate.Role;
import com.example.demo.Repository.UserOneRegisterRepository;
import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService 
{
	private  UserOneRegisterRepository repository ; 
	 private  PasswordEncoder passwordEncoder;
	 private  JwtService jwtservice ;
	 private AuthenticationManager authenticationManager ;
	 public AuthenticationResponse register(RegisterRequest request) {
			// TODO Auto-generated method stub				
		    var user = UserRegister.builder()
		            .username(request.getUsername())
		            .emailid(request.getEmailid())
		            .mobileno(request.getMobileno())
		            .password(passwordEncoder.encode(request.getPassword()))
		            .role(Role.USER)
		            .build();
		    repository.save(user); 
		    var jwtToken = jwtservice.generateToken(user);
		    
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}

	 public AuthenticationResponse authenticate(AuthenticationRequest request) {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
					request.getUsername(),
					request.getPassword()
					)
					);
					var user = repository.findByUsername(request.getUsername())
							.orElseThrow();
					 var jwtToken = jwtservice.generateToken(user);
					    
						return AuthenticationResponse.builder()
								.token(jwtToken)
								.build();
		}

}