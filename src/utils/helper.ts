/**
 * A helper function that assists scrolling to the bottom of the chat window automatically
 */
export const scrollToBottom = (): void => {
  let chatroomWindowElement: HTMLElement | null = document.getElementById(
    'messages'
  )
  if (chatroomWindowElement) {
    chatroomWindowElement.scrollTop = chatroomWindowElement.scrollHeight
  }
}
