import { useState, useCallback, useEffect } from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { keyframes } from "@mui/system";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { StyledButton } from "./ButtonLinks";
import { DraggableSkill } from "./skills/DraggableSkill";
import { DroppableZone } from "./skills/DroppableZone";
import { CustomDragLayer } from "./skills/CustomDragLayer";
import { skills, categories } from "./skills/data";
import { useTouchDevice } from "../hooks/useTouchDevice";

const rocketLaunch = keyframes`
  0% {
    transform: translateX(-325px) rotate(-23deg) scale(1.5);
    opacity: 1;
  }
  80% {
    transform: translateX(-150px) translateY(-250px) rotate(10deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(800px) translateY(-500px) rotate(45deg) scale(.9);
    opacity: 0;
  }
`;

const SkillsOrganizerInternal = () => {
  const [placedSkills, setPlacedSkills] = useState<Record<string, string>>({});
  const [celebratingSkills, setCelebratingSkills] = useState<Set<string>>(
    new Set()
  );
  const [shakingZones, setShakingZones] = useState<Set<string>>(new Set());
  const [showRocket, setShowRocket] = useState(false);
  const [wrongDropSkills, setWrongDropSkills] = useState<Set<string>>(
    new Set()
  );

  const handleDrop = useCallback(
    (skillId: string, categoryId: string) => {
      const skill = skills.find((s) => s.id === skillId);
      if (skill && skill.category === categoryId) {
        setPlacedSkills((prev) => ({ ...prev, [skillId]: categoryId }));
        setCelebratingSkills((prev) => new Set([...prev, skillId]));

        setTimeout(() => {
          setCelebratingSkills((prev) => {
            const newSet = new Set(prev);
            newSet.delete(skillId);
            return newSet;
          });
        }, 600);
      } else {
        setWrongDropSkills((prev) => new Set([...prev, skillId]));
        setShakingZones((prev) => new Set([...prev, categoryId]));

        setTimeout(() => {
          setWrongDropSkills((prev) => {
            const newSet = new Set(prev);
            newSet.delete(skillId);
            return newSet;
          });
          setShakingZones((prev) => {
            const newSet = new Set(prev);
            newSet.delete(categoryId);
            return newSet;
          });
        }, 800);
      }
    },
    [placedSkills]
  );

  const unplacedSkills = skills.filter((skill) => !placedSkills[skill.id]);
  const completedCount = Object.keys(placedSkills).length;
  const isComplete = completedCount === skills.length;

  useEffect(() => {
    if (isComplete && !showRocket) {
      setTimeout(() => {
        setShowRocket(true);
      }, 800);
    }
  }, [isComplete, showRocket]);

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto" }}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          variant="body2"
          sx={{
            opacity: 1,
            fontSize: { xs: "0.8rem", sm: "1.1rem" },
          }}
        >
          Organize my skills into the correct area of expertise
        </Typography>
      </Box>

      {unplacedSkills.length > 0 && (
        <Box sx={{ mt: 1, mx: { xs: 2 }, px: { xs: 2, sm: 0 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(auto-fit, minmax(160px, 1fr))",
              },
              gap: { xs: 1, sm: 2 },
              justifyItems: "stretch",
              alignItems: "flex-start",
              width: "100%",
              py: { xs: 2, sm: 0 },
            }}
          >
            {unplacedSkills.map((skill) => (
              <DraggableSkill
                key={skill.id}
                skill={skill}
                isPlaced={celebratingSkills.has(skill.id)}
                isWrongDrop={wrongDropSkills.has(skill.id)}
              />
            ))}
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 1, md: 2 },
          mt: { xs: 2, md: 4 },
          m: { xs: 1, md: 2 },
          "& > :nth-of-type(3)": {
            gridColumn: { xs: "1", sm: "1 / -1", md: "3" },
            justifySelf: { xs: "stretch", sm: "center", md: "stretch" },
            width: { xs: "100%", sm: "55%", md: "100%" },
          },
        }}
      >
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => placedSkills[skill.id] === category.id
          );

          return (
            <DroppableZone
              key={category.id}
              category={category}
              onDrop={(skillId) => handleDrop(skillId, category.id)}
              shake={shakingZones.has(category.id)}
            >
              <Box sx={{ textAlign: "center", position: "relative" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: "white",
                    fontSize: { xs: "1.25rem", sm: "1.25rem" },
                  }}
                >
                  {category.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  }}
                >
                  {category.description}
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "row", sm: "row", md: "column" }}
                sx={{
                  flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
                  gap: 2,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {categorySkills.map((skill) => (
                  <Paper
                    key={skill.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      padding: { xs: "6px 8px", sm: "12px 16px" },
                      borderRadius: "12px",
                      border: `2px solid rgba(255, 255, 255, 0.2)`,
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      width: { xs: "auto", sm: "auto", md: "100%" },
                      flex: {
                        xs: "0 1 calc(50% - 8px)",
                        sm: "0 1 calc(50% - 8px)",
                        md: "1 1 100%",
                      },
                      minHeight: { xs: "40px", sm: "64px" },
                    }}
                  >
                    <Stack sx={{ width: "100%" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "white",
                          fontSize: { xs: "0.75rem", sm: "1rem" },
                          wordWrap: "break-word",
                          textAlign: "center",
                        }}
                      >
                        {skill.name} 🌟
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: { xs: "0.6rem", sm: "0.75rem" },
                          display: { xs: "none", sm: "block" },
                          wordWrap: "break-word",
                          textAlign: "center",
                        }}
                      >
                        {skill.years} yrs • {skill.context}
                      </Typography>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </DroppableZone>
          );
        })}
      </Box>

      {isComplete && (
        <Box sx={{ textAlign: "center", mt: 2, position: "relative" }}>
          {showRocket && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "20%",
                  fontSize: "5rem",
                  animation: `${rocketLaunch} 3s ease-out forwards`,
                  zIndex: 10,
                  display: { xs: "none", sm: "block" },
                }}
              >
                🚀
              </Box>
            </>
          )}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 100,
              fontSize: { xs: "1.5rem", sm: "2rem" },
              mb: 1,
            }}
          >
            🎉 Mission Complete! 🎉
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              mt: 1,
              fontSize: { xs: "0.85rem", sm: "1.25rem" },
            }}
          >
            Ready to see these skills in action?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              mt: 1,
              fontSize: { xs: "0.85rem", sm: "1.25rem" },
            }}
          >
            Let's build something amazing together!{" "}
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              🚀
            </Box>
          </Typography>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
            <StyledButton
              href="mailto:kawilliams8@gmail.com?subject=Hey,%20Katie!%20I%20completed%20your%20resume%20skills%20game!"
              variant="contained"
              startIcon={<EmailOutlineIcon />}
              sx={{ width: { xs: "200px", sm: "160px" } }}
            >
              Email Me
            </StyledButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export const SkillsOrganizer = () => {
  const isTouchDevice = useTouchDevice();
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;
  const options = isTouchDevice ? { enableMouseEvents: false } : {};

  return (
    <DndProvider backend={backend} options={options}>
      <SkillsOrganizerInternal />
      <CustomDragLayer />
    </DndProvider>
  );
};
