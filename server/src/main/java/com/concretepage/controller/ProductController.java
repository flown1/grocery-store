package com.concretepage.controller;
import java.util.List;

import com.concretepage.entity.Product;
import com.concretepage.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;


@Controller
@RequestMapping("product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Integer id) {
        Product product = productService.getProductById(id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> list = productService.getAllProducts();
        return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("add")
    public ResponseEntity<Void> addArticle(@RequestBody Product product, UriComponentsBuilder builder) {
        boolean alreadyExists = productService.addProduct(product);
        if (alreadyExists == false) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("product/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable("id") Integer id) {
        productService.deleteProduct(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}