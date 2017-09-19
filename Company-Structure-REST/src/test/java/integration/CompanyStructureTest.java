package integration;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.momenton.companystructure.CompanystructureApplication;




@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT,classes=CompanystructureApplication.class)
@AutoConfigureMockMvc
public class CompanyStructureTest {
	
	@Autowired
    MockMvc mockMvc;

	@Test
	@Sql(scripts = "classpath:data/normalTree.sql")
	public void givenNormalTree_returnJson() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/employees"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andExpect(jsonPath("$", hasSize(1)))
			.andExpect(jsonPath("$[0].name", is("Jamie")))
			.andExpect(jsonPath("$[0].id", is(150)))
			.andExpect(jsonPath("$[0].subordinates", hasSize(2)))
			.andExpect(jsonPath("$[0].subordinates[0].name", is("Alan")))
			.andExpect(jsonPath("$[0].subordinates[0].subordinates", hasSize(2)))
			.andExpect(jsonPath("$[0].subordinates[0].subordinates[0].name", is("Martin")))
			.andExpect(jsonPath("$[0].subordinates[0].subordinates[1].name", is("Alex")))
			.andExpect(jsonPath("$[0].subordinates[1].name", is("Steve")))
			.andExpect(jsonPath("$[0].subordinates[1].subordinates", hasSize(1)))
			.andExpect(jsonPath("$[0].subordinates[1].subordinates[0].name", is("David")));
	}
	
	@Test
	@Sql(scripts = "classpath:data/two_users_no_manager.sql")
	public void givenUserWithNoManager_returnTwoUsersInRoot() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/employees"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andExpect(jsonPath("$", hasSize(2)))
			.andExpect(jsonPath("$[0].name", is("Alan")))
			.andExpect(jsonPath("$[0].subordinates", hasSize(2)))
			.andExpect(jsonPath("$[1].name", is("Jamie"))) 
			.andExpect(jsonPath("$[1].subordinates", hasSize(1)));
	}
	
	@Test
	@Sql(scripts = "classpath:data/tree_order.sql")
	public void givenUserWithNoManager_orderUserByIdNotName() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/employees"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andExpect(jsonPath("$[0].subordinates[0].name", is("Steve")))
			.andExpect(jsonPath("$[0].subordinates[0].id", is(200)))
			.andExpect(jsonPath("$[0].subordinates[1].name", is("Alan")))
			.andExpect(jsonPath("$[0].subordinates[1].id", is(400)));
	}
		
}
