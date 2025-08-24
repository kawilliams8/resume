import {
  List,
  ListItem,
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const BotInstructions = () => {
  return (
    <Stack mt={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            variant="h6"
            sx={{
              fontSize: "1rem",
              color: "#282c34",
            }}
          >
            🤖 What is the Colorado History Photos Bot?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "left" }}
          >
            Colorado History Photos is an automated Bluesky bot that shares
            curated historical photographs from the Denver Public Library
            Digital Archive, bringing Colorado's rich history to social media
            users.
          </Typography>
          <Typography
            my={2}
            variant="h5"
            sx={{
              fontSize: "1.25rem",

              textAlign: "left",
            }}
          >
            How it works:
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "left" }}
          >
            This bot runs on GitHub Actions with twice-daily cron triggers and
            executes a sophisticated series of steps. The posting script
            executes in under 5 seconds, ensuring reliable twice-daily posts
            with minimal failures. The pipeline:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "left", mt: 1 }}
          >
            <List>
              <ListItem>
                - Retrieves the next post ID from a SQLite database
              </ListItem>
              <ListItem>
                - Downloads historical photograph and metadata from the
                Library's Digital Archive
              </ListItem>
              <ListItem>
                - Optimizes images for social media (automatic resizing &
                compression)
              </ListItem>
              <ListItem>
                - Enhances descriptions using Claude API for clarity and
                engagement
              </ListItem>
              <ListItem>
                - Generates contextual hashtags for discoverability
              </ListItem>
              <ListItem>
                - Publishes to Bluesky via the AT Protocol with proper threading
              </ListItem>
              <ListItem>
                - Links back to the original archive with rich text formatting
              </ListItem>
              <ListItem>
                - Posts searchable custom hash tags with rich text formatting
              </ListItem>
              <ListItem>
                - Updates database tables and commits changes to the repository
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
