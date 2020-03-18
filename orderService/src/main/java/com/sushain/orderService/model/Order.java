package com.sushain.orderService.model;

import com.sushain.orderService.model.sharedmodel.Product;
import com.sushain.orderService.model.sharedmodel.User;
import sun.jvm.hotspot.oops.Instance;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Order {

    @Id
            @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    Integer pid;
    Integer uid;
    Date orderDate;
    Date recieveDate;
    String Notes;

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getRecieveDate() {
        return recieveDate;
    }

    public void setRecieveDate(Date recieveDate) {
        this.recieveDate = recieveDate;
    }

    public String getNotes() {
        return Notes;
    }

    public void setNotes(String notes) {
        Notes = notes;
    }


}

