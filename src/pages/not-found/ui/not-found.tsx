import { Box, Image } from "@mantine/core";

import Error from "@/shared/assets/404-error.png";

const NotFound = () => {
  return (
    <Box>
      <Image src={Error} />
    </Box>
  );
};

export default NotFound;
