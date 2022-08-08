// Libraries
import { useEffect, useState, useRef } from "react";

// UI
import { Box, VStack, HStack, Text, Input, Button } from "@chakra-ui/react";

const NewToDoInput = () => {
  // state
  const [todo, setTodo] = useState();
  const inputRef = useRef(null);
  // save function
  const saveTodo = () => {
    console.log(todo);
  };
  return (
    <Box className="my-12">
      <HStack>
        <Input
          placeholder="Enter a new task"
          onChange={(e) => {
            e.preventDefault();
            setTodo(e.target.value);
          }}
          ref={inputRef}
        />
        {todo === "" ? null : (
          <Button
            color="white"
            bgColor="red.600"
            onClick={() => {
              inputRef.current.value = "";
              setTodo("");
            }}
          >
            Clear
          </Button>
        )}

        <Button color="white" bgColor="green.600" onClick={saveTodo}>
          Save
        </Button>
      </HStack>
    </Box>
  );
};

const Todo = () => {
  // state
  const [todos, setTodos] = useState([""]);

  // useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  // return
  return (
    <Box>
      <VStack>
        <NewToDoInput />
        <h2>Todo Count: {todos.length}</h2>
        {todos.map((todo) => (
          <Box className="mt-2 shadow" sx={{ width: "80%" }} key={todo.id}>
            <Text className="text-center py-5 text-gray-500">{todo.title}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Todo;
