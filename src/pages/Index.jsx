import React from "react";
import { Box, Button, Flex, Heading, IconButton, Image, SimpleGrid, Stack, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { FaPhone, FaChartLine, FaCog, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        ChatGPT-Based Virtual Agent for Cold Calling and Sales
      </Heading>
      <Text mb={5}>A ChatGPT-based virtual agent designed to make cold calling and sales. It uses artificial intelligence to interact with potential customers naturally and engagingly. The platform combines a modern user interface with a robust backend to manage calls, conversation states, and data collection.</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        <Box>
          <Heading as="h2" size="lg" mb={3}>
            Key Features
          </Heading>
          <Stack spacing={3}>
            <Box>
              <Heading as="h3" size="md">
                User Interface
              </Heading>
              <Text>• Monitoring Dashboard: Provides a centralized view to monitor all agent activities, including ongoing calls, call statistics, and sales results.</Text>
              <Text>• Customization: Users can configure agent parameters, such as sales scripts, target customers, and calling schedules.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Conversational Intelligence
              </Heading>
              <Text>• Conversation Management: ChatGPT handles customer conversations, answering questions, providing product information, and attempting to close sales.</Text>
              <Text>• Natural Language Processing (NLP): Utilizes advanced NLP techniques to understand and respond appropriately during conversations.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Call Integration
              </Heading>
              <Text>• Call API: The application integrates with third-party services like Twilio to handle voice calls.</Text>
              <Text>• Call Recording: All calls can be recorded and archived for review and analysis.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Robust Backend
              </Heading>
              <Text>• Supabase: Used as a backend to manage user authentication, call database, and data storage.</Text>
              <Text>• State Management: Supabase maintains the state of conversations and calls, ensuring the agent can resume interrupted conversations and track progress.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Analytics and Reporting
              </Heading>
              <Text>• Real-Time Statistics: The dashboard displays real-time metrics such as the number of calls made, conversion rate, and total sales.</Text>
              <Text>• Custom Reports: Users can generate detailed reports on agent performance, identifying areas for improvement and optimizing sales strategies.</Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={3}>
            Technology Used
          </Heading>
          <Stack spacing={3}>
            <Text>• Frontend: Chakra UI to build an elegant and accessible user interface.</Text>
            <Text>• Backend: Supabase for database management, authentication, and storage.</Text>
            <Text>• Third-Party API: Integration with Twilio for voice calls.</Text>
            <Text>• Artificial Intelligence: ChatGPT by OpenAI (model gpt-40) for conversation management.</Text>
          </Stack>
        </Box>
      </SimpleGrid>

      <Heading as="h2" size="lg" mb={5}>
        Use Cases
      </Heading>
      <Stack spacing={3} mb={10}>
        <Text>• Sales and Marketing: Automates the cold calling process to increase sales efficiency.</Text>
        <Text>• Customer Service: Can be used to answer frequently asked questions and provide customer assistance.</Text>
        <Text>• Market Research: Conducts surveys and collects customer feedback.</Text>
      </Stack>

      <Heading as="h2" size="lg" mb={5}>
        Monitoring Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Stat>
            <StatLabel>Ongoing Calls</StatLabel>
            <StatNumber>15</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Call Statistics</StatLabel>
            <StatNumber>75% Success Rate</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Total Sales</StatLabel>
            <StatNumber>$12,000</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Conversion Rate</StatLabel>
            <StatNumber>30%</StatNumber>
          </Stat>
        </Box>
      </SimpleGrid>

      <Flex mt={10} justifyContent="space-around">
        <IconButton icon={<FaPhone />} aria-label="Call" />
        <IconButton icon={<FaChartLine />} aria-label="Statistics" />
        <IconButton icon={<FaCog />} aria-label="Settings" />
        <IconButton icon={<FaUser />} aria-label="Profile" />
      </Flex>
    </Box>
  );
};

export default Index;
