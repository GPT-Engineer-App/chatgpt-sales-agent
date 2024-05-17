import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-supabase-url";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("users").select("*");
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <Box p={5}>
      <Heading>User Data</Heading>
      {users.map((user) => (
        <Box key={user.id} mt={4} p={4} borderWidth="1px" borderRadius="lg">
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default UserData;
