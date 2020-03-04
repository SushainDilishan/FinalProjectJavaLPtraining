package com.sushain.service;

import java.util.List;

import com.sushain.model.User;

public interface UserService {
	public List<User> findAllUsers();
	User save(User user);
	User fetchallUser(int id);

}
