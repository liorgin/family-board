import { create } from "zustand";

interface VoiceStore {
  isRecording: boolean
  isAwake: boolean
  text: string
  startRecording: () => void
  stopRecording: () => void
}

const useVoiceStore = create<VoiceStore>()((set, get) => ({
    isRecording: false,
    isAwake: false,
    text: '',
    startRecording: () => set({ isRecording: true }),
    stopRecording: () => set({ isRecording: false }),
}))

export default useVoiceStore
