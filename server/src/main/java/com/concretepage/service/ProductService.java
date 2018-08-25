package com.concretepage.service;

import com.concretepage.dao.IProductDAO;
import com.concretepage.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductDAO productDAO;
    @Override
    public Product getProductById(int articleId) {
        Product obj = productDAO.getProductById(articleId);
        return obj;
    }
    @Override
    public List<Product> getAllProducts(){
        return productDAO.getAllProducts();
    }
    @Override
    public synchronized boolean addProduct(Product product){
//        if (articleDAO.articleExists(article.getTitle(), article.getCategory())) {
//            return false;
//        } else {
            productDAO.addProduct(product);
            return true;
//        }
    }
//    @Override
//    public void updateProduct(Product product) {
//        productDAO.updateProduct(product);
//    }
    @Override
    public void deleteProduct(int productId) {
        productDAO.deleteProduct(productId);
    }
}
