package com.concretepage.controller;

import com.concretepage.entity.Article;
import com.concretepage.entity.User;
import com.concretepage.entity.utils.SignInInfo;
import com.concretepage.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Controller
@RequestMapping("users")
public class UserController {
    @Autowired
    private IUserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> list = userService.getAllUsers();
        return new ResponseEntity<List<User>>(list, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("user")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("signIn")
    public ResponseEntity<User> signIn(@RequestBody SignInInfo signInInfo, UriComponentsBuilder builder){
        List<User> list = userService.getAllUsers();
        System.out.println(signInInfo.email + " : " + signInInfo.password);
        for(User user : list){
            if(user.getEmail().equals(signInInfo.email)) {
                if(user.getPassword().equals(signInInfo.password)) {
                    System.out.println(user.getEmail() + " found!");
                    return new ResponseEntity<User>(user, HttpStatus.OK);
                }
            }
        }
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("signUp")
    public ResponseEntity<User> signUp(@RequestBody User user, UriComponentsBuilder builder) {
        //bla bla bla
        return null;
    }
}
