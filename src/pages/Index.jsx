import { Box, Container, VStack, HStack, IconButton, Input, Textarea, Avatar, Text, Flex, Spacer, Divider } from "@chakra-ui/react";
import { useState } from 'react';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([
    { id: 1, user: "User Name", username: "@username", content: "This is a tweet content." },
    { id: 2, user: "User Name", username: "@username", content: "This is another tweet content." }
  ]);

  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      const newTweetObject = {
        id: tweets.length + 1,
        user: "User Name",
        username: "@username",
        content: newTweet
      };
      setTweets([newTweetObject, ...tweets]);
      setNewTweet("");
    }
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex height="100vh">
        {/* Sidebar */}
        <VStack
          w="20%"
          p={4}
          spacing={4}
          align="flex-start"
          borderRight="1px solid"
          borderColor="gray.200"
        >
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" />
          <IconButton aria-label="Explore" icon={<FaHashtag />} size="lg" />
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" />
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" />
        </VStack>

        {/* Main Feed */}
        <VStack
          w="60%"
          p={4}
          spacing={4}
          align="stretch"
          borderRight="1px solid"
          borderColor="gray.200"
        >
          {/* Tweet Input Box */}
          <HStack spacing={4}>
            <Avatar name="User" />
            <VStack w="100%" spacing={2}>
              <Textarea
                placeholder="What's happening?"
                value={newTweet}
                onChange={(e) => setNewTweet(e.target.value)}
              />
              <HStack justify="flex-end" w="100%">
                <IconButton
                  aria-label="Tweet"
                  icon={<FaHashtag />}
                  size="md"
                  onClick={handleTweetSubmit}
                />
              </HStack>
            </VStack>
          </HStack>
          <Divider />

          {/* Tweets */}
          <VStack spacing={4} align="stretch">
            {tweets.map((tweet) => (
              <Box key={tweet.id} p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
                <HStack spacing={4}>
                  <Avatar name={tweet.user} />
                  <VStack align="flex-start" spacing={1}>
                    <Text fontWeight="bold">{tweet.user}</Text>
                    <Text>{tweet.username}</Text>
                  </VStack>
                </HStack>
                <Text mt={4}>{tweet.content}</Text>
              </Box>
            ))}
          </VStack>
        </VStack>

        {/* Sidebar */}
        <VStack
          w="20%"
          p={4}
          spacing={4}
          align="flex-start"
        >
          <Text fontWeight="bold">Trends for you</Text>
          <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" w="100%">
            <Text>#TrendingTopic1</Text>
          </Box>
          <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" w="100%">
            <Text>#TrendingTopic2</Text>
          </Box>
          <Spacer />
          <Text fontWeight="bold">Who to follow</Text>
          <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" w="100%">
            <HStack spacing={4}>
              <Avatar name="User" />
              <VStack align="flex-start" spacing={1}>
                <Text fontWeight="bold">User Name</Text>
                <Text>@username</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;