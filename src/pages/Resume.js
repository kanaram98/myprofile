import React from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Chip,
  Card,
  CardContent,
  Stack,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
// import profile from "../assets/profile.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Resume = () => {
  return (
    <Container sx={{ py: 5 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 3,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: 10,
            },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  bgcolor: "#1e1e2f",
                  p: 3,
                  borderRadius: 3,
                  color: "#fff",
                }}
              >
                <Avatar
                  src={"profile"}
                  alt="John Doe"
                  sx={{
                    width: 150,
                    height: 150,
                    mb: 2,
                    border: "4px solid #90caf9",
                  }}
                />
                <Typography variant="h5">John Doe</Typography>
                <Typography>Full Stack Developer</Typography>
                <Box mt={2} width="300px">
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                    "Typescript",
                    "Styled-component",
                    "Jest-testing",
                    "playwright",
                  ].map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      color={i % 2 === 0 ? "primary" : "secondary"}
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 3,
                  borderRadius: 3,
                  color: "#000",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6">Contact</Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Email"
                        secondary="johndoe@email.com"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Phone"
                        secondary="+91 98765 43210"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="GitHub"
                        secondary={
                          <Link
                            href="https://github.com/johndoe"
                            target="_blank"
                            color="info.light"
                          >
                            github.com/johndoe
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="LinkedIn"
                        secondary={
                          <Link
                            href="https://linkedin.com/in/johndoe"
                            target="_blank"
                            color="info.light"
                          >
                            linkedin.com/in/johndoe
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                </motion.div>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6">Experience</Typography>
                <Stack spacing={2}>
                  {[
                    {
                      title: "TCS – Assistant Developer",
                      date: "Oct 2024 – Present",
                      desc: "Developed scalable internal tools with React, improved performance by 30%.",
                    },
                    {
                      title: "Freelancer",
                      date: "Jan 2022 – Sep 2024",
                      desc: "Built 10+ websites using React, TypeScript and Express.",
                    },
                  ].map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                      <Card sx={{ backgroundColor: "#1e1e2f", color: "#fff" }}>
                        <CardContent>
                          <Typography variant="subtitle1">
                            {exp.title}
                          </Typography>
                          <Typography variant="body2" color="#ccc">
                            {exp.date}
                          </Typography>
                          <Typography>{exp.desc}</Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6">Education</Typography>
                <Typography>
                  B.E. Computer Science – Pune University (2020 – 2024)
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6">Projects</Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="AI Component Library"
                      secondary="Built a library of 50+ components with GitHub/Slack AI support."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Finance Dashboard"
                      secondary="Accounting tool with TDS, GST, and reconciliation tools."
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Resume;
