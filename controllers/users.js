import { v4 as uuidv4} from 'uuid';
//uuidv4(); //package that gives unique ids for our users

let users=[];

export const createUser = (req,res) => {
    //console.log('POST ROUTE REACHED');

    const user=req.body;

    const userWithId = {...user, id: uuidv4()}; //spread the properties of the user and added a new value id

    users.push(userWithId);

    res.send(`User with the name ${user.firstname} added to the database`);
};

export const getUsers = (req,res) => {
    // console.log(users);
    res.send(users);
};

export const getUser = (req,res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } =req.params;

    // id to be deleted should be filtered from the array and deleted
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);

};

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstname, lastname, age} = req.body;

    const userToBeUpdated = users.find((user) =>  user.id === id);

    if(firstname){
        userToBeUpdated.firstname= firstname;
    }
    if(lastname){
        userToBeUpdated.lastname=lastname;
    }
    if(age){
        userToBeUpdated.age=age;
    }

    res.send(`User with the id ${id} has been updated`);

};