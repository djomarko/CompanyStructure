package com.momenton.companystructure.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momenton.companystructure.data.Employee;
import com.momenton.companystructure.repositories.EmployeeRepository;

@RestController
public class CompanyStructureController {
	
	@Autowired
	private EmployeeRepository repo;

	@RequestMapping("/employees")
	public List<Employee> getEmployeeTree() {
		return repo.getEmployeesWithoutManager();
	}
}
