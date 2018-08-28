package com.concretepage.controller;

import com.concretepage.entity.Article;
import com.concretepage.entity.User;
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
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("article/{id}")
    public ResponseEntity<User> getArticleById(@PathVariable("id") Integer id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("articles")
    public ResponseEntity<List<User>> getAllArticles() {
        List<User> list = userService.getAllUsers();
        return new ResponseEntity<List<User>>(list, HttpStatus.OK);
    }

    @PostMapping("article")
    public ResponseEntity<Void> addArticle(@RequestBody User user, UriComponentsBuilder builder) {
        boolean flag = userService.addUser(user);
        if (flag == false) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/article/{id}").buildAndExpand(user.getUserId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @PutMapping("user")
    public ResponseEntity<User> updateArticle(@RequestBody User user) {
        userService.updateUser(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("user/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
