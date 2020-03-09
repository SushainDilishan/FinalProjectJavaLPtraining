package com.sushain.service;

import java.util.List;

import com.sushain.model.User;
import com.sushain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public List<User> findAllUsers() {

		return userRepository.findAll();
	}

	@Override
	public User save(User user) {

		User user1 = userRepository.save(user);

		return user1;
	}

	@Override
	public User fetchallUser(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
