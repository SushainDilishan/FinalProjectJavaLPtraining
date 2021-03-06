package com.sushain.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(	name = "users",
		uniqueConstraints = {
				@UniqueConstraint(columnNames = "username"),
				@UniqueConstraint(columnNames = "email")
		})
public class User {
		
		@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;

		@NotBlank
				@Size(max = 20)
		private String username;

		@NotBlank
		@Size(max = 50)
		@Email
		private String email;

//		@NotBlank
		private Integer telephone;
		@NotBlank
				@Size(max = 100)
		private String password;

		@ManyToMany(fetch = FetchType.LAZY)
		@JoinTable(	name = "user_roles",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id"))
		private Set<Roles> roles = new HashSet<>();

		public User(){}

		public User(String username,String email,String password,Integer telephone){
			this.username = username;
			this.email = email;
			this.password = password;
			this.telephone = telephone;
		}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getTelephone() {
		return telephone;
	}

	public void setTelephone(Integer telephone) {
		this.telephone = telephone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Roles> getRoles() {
		return roles;
	}

	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}
}
