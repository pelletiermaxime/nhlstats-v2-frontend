export default defineMcpPrompt({
  name: 'get-standings',
  description: 'Get the standings for an NHL team',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: 'What are the NHL standings for all teams?'
        }
      }]
    }
  }
})
