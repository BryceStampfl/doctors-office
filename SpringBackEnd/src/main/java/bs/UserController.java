package bs;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = "doctors-office.s3-website.us-east-2.amazonaws.com")
@CrossOrigin()
public class UserController {

    private final UserRepository userRepository;


    @GetMapping("/users")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user){
        userRepository.save(user);
    }



    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


}
