export class CreateUserDto {
 
    id:          number;
    name:        String;
    surname:     String;
    email:       String;
    telephone:   String;
    login:       String;
    password:    String;
    dOB :        Date |undefined; 
    address1:    String;
    address2:    String;
    country :    String;
    status :     Boolean;
    isAdmin:     number;
    created_at:  Date |undefined; 
    updated_at:  Date |undefined;


}
