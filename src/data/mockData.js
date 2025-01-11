export const mockData = {
    yourScore: 136,
    topScore: 230,
    accuracy: 92,
    subjectData: [
      { name: "Physics", value: 85, color: "#0088FE" },
      { name: "Chemistry", value: 95, color: "#00C49F" },
      { name: "Maths", value: 70, color: "#FFBB28" },
      { name: "English", value: 90, color: "#FF8042" },
    ],
    responseTimeData: {
      average: "60%",
      trend: "↑2min",
    },
    approachData: [
      { type: "Based on Facts", value: 25 },
      { type: "Based on Analysis", value: 32 },
      { type: "Based on Elimination", value: 19 },
      { type: "Based on Guess", value: 24 },
    ],
    suggestions: [
      { time: "0.12-10", difficulty: "Easy" },
      { time: "0.12-10", difficulty: "Medium" },
      { time: "0.32-40", difficulty: "Hard" },
    ],
    accuracyChartData: [
      { slot: 1, accuracy: 70 },
      { slot: 2, accuracy: 95 },
      { slot: 3, accuracy: 80 },
      { slot: 4, accuracy: 65 },
      { slot: 5, accuracy: 85 },
      { slot: 6, accuracy: 90 },
    ],
    timeTakenChartData: {
      // You'll need to structure this appropriately
      // This is just a placeholder
      lines: [
        {
          id: "line1",
          data: [
            { x: 10, y: 20 },
            { x: 20, y: 25 },
            { x: 30, y: 18 },
            // ... more data points
          ],
        },
        {
          id: "line2",
          data: [
            { x: 10, y: 30 },
            { x: 20, y: 35 },
            { x: 30, y: 28 },
            // ... more data points
          ],
        },
      ],
    },
  };