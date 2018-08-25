package com.concretepage.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="id")
    private int id;
    @Column(name="name") //id name quantity desc_text desc_vitamins desc_origin img_url
    private String name;
    @Column(name="quantity")
    private int quantity;
    @Column(name="desc_text")
    private String desc_text;
    @Column(name="desc_vitamins")
    private String desc_vitamins;
    @Column(name="desc_origin")
    private String desc_origin;
    @Column(name="img_url")
    private String img_url;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getDesc_text() {
        return desc_text;
    }

    public void setDesc_text(String desc_text) {
        this.desc_text = desc_text;
    }

    public String getDesc_vitamins() {
        return desc_vitamins;
    }

    public void setDesc_vitamins(String desc_vitamins) {
        this.desc_vitamins = desc_vitamins;
    }

    public String getDesc_origin() {
        return desc_origin;
    }

    public void setDesc_origin(String desc_origin) {
        this.desc_origin = desc_origin;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
}