import {
  ActionIcon,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import classes from "Login.module.css";
const Login = () => {
  return (
    <Box w="100vw" h="100vh" style={{ overflow: "hidden" }}>
      <Grid gutter={0}>
        <Grid.Col span={7.5} h="100vh">
          <Center h="100%" style={{ display: "flex", flexDirection: "column" }}>
            <Stack align="center" w="50%">
              <Text fz={60} fw={700}>
                Sign in
              </Text>
              <Group>
                <ActionIcon
                  size="lg"
                  radius="50%"
                  variant="outline"
                  color="dark">
                  <FontAwesomeIcon icon={faFacebookF} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="50%"
                  variant="outline"
                  color="dark">
                  <FontAwesomeIcon icon={faGoogle} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="50%"
                  variant="outline"
                  color="dark">
                  <FontAwesomeIcon icon={faInstagram} />
                </ActionIcon>
              </Group>
              <Text>or use your account</Text>
              <Stack align="center" component="form" w="100%">
                <Input
                  placeholder="Email"
                  variant="filled"
                  size="lg"
                  w="100%"
                />
                <Input
                  placeholder="Password"
                  variant="filled"
                  size="lg"
                  w="100%"
                />
                <Text>Forgot your password?</Text>
                <Button
                  size="lg"
                  tt="uppercase"
                  style={{
                    borderRadius: "25px",
                    background: "linear-gradient(to right, #141E30, #243B55)",
                  }}
                  miw={200}>
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Center>
        </Grid.Col>

        <Grid.Col
          span={4.5}
          h="100vh"
          style={{
            background: "linear-gradient(to right, #141E30, #243B55)",
          }}>
          <Center h="100%">
            <Stack ta="center" align="center" gap={50}>
              <Text fz={60} fw={700} color="white" lh={0.9}>
                Hello Friend!
              </Text>
              <Text fz={18} fw={300} color="white">
                Enter your personal
              </Text>
              <Button variant="outline" w="200" size="lg" tt="uppercase" radius={25} color="white">
                Sign up
              </Button>
            </Stack>
          </Center>
        </Grid.Col>


      </Grid>
    </Box>
  );
};

export default Login;
