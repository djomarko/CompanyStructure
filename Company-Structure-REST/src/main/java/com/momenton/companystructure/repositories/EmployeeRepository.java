package com.momenton.companystructure.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.momenton.companystructure.data.Employee;

@org.springframework.stereotype.Repository
public interface EmployeeRepository extends Repository<Employee, Long> {
	
	@Query("from Employee e WHERE e.manager IS NULL")
	List<Employee> getEmployeesWithoutManager();
	
}
