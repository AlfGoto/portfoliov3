import { Box, Typography, Grid, Paper } from "@mui/material"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "CSS/SCSS", "DOM Manipulation", "Material-UI"],
  },
  {
    category: "Backend",
    items: ["AWS", "Node.js", "Database Design", "API Development", "Architecture"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "CI/CD", "Agile/Scrum", "Testing"],
  },
]

export default function SkillsSection() {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          mb: { xs: 3, sm: 4, md: 6 },
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.category}>
            <Paper
              sx={{
                p: { xs: 2, sm: 3 },
                height: "100%",
                "&:hover": {
                  transform: "translateY(-4px)",
                  transition: "transform 0.2s ease-in-out",
                },
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
                {skill.category}
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 2,
                  "& li": {
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  },
                }}
              >
                {skill.items.map((item) => (
                  <Typography component="li" key={item} sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

