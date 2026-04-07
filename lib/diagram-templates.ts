export interface Node {
  id: string
  label: string
  sublabel?: string
  type: "atem" | "pc" | "device" | "converter" | "cloud" | "stream"
  x: number
  y: number
  system: string // e.g., "main", "sub", "control", "external", etc.
}

export interface Connection {
  from: string
  to: string
  label?: string
  type: "hdmi" | "sdi" | "usb" | "wireless" | "ethernet" | "stream" | "audio"
  lineStyle?: "solid" | "dotted" | "thick"
}

export interface Subgraph {
  id: string
  title: string
  x: number
  y: number
  width: number
  height: number
}

export interface DiagramTemplate {
  id: string
  name: string
  description: string
  nodes: Node[]
  connections: Connection[]
  subgraphs: Subgraph[]
}

// Template 1: Dual ATEM Studio Setup (Current default)
const dualAtemStudio: DiagramTemplate = {
  id: "dual-atem-studio",
  name: "Dual ATEM Studio",
  description: "Two ATEM switchers with SDI bridge, cameras, and streaming",
  nodes: [
    { id: "youtube", label: "YouTube", sublabel: "Live", type: "cloud", x: 1100, y: 30, system: "external" },
    { id: "pc1", label: "PC Actor 1", type: "pc", x: 60, y: 100, system: "main" },
    { id: "pc2", label: "PC Actor 2", type: "pc", x: 60, y: 190, system: "main" },
    { id: "pc3", label: "PC 3", type: "pc", x: 60, y: 280, system: "main" },
    { id: "stream_bridge", label: "ATEM Streaming", sublabel: "Bridge", type: "stream", x: 60, y: 370, system: "main" },
    { id: "atem_r", label: "ATEM Mini Pro", type: "atem", x: 240, y: 220, system: "main" },
    { id: "ipad", label: "iPad", sublabel: "MultiView", type: "device", x: 420, y: 130, system: "main" },
    { id: "bidi", label: "BiDi Converter", type: "converter", x: 420, y: 250, system: "main" },
    { id: "screen", label: "Screen", type: "device", x: 420, y: 370, system: "main" },
    { id: "cam1", label: "Camera", type: "device", x: 600, y: 100, system: "sub" },
    { id: "sdi_conv", label: "SDI to HDMI", type: "converter", x: 600, y: 200, system: "sub" },
    { id: "holly_tx", label: "Hollyland TX", type: "device", x: 720, y: 100, system: "sub" },
    { id: "holly_rx", label: "Hollyland RX", type: "device", x: 840, y: 100, system: "sub" },
    { id: "insta360", label: "Insta360", sublabel: "Webcam", type: "device", x: 720, y: 310, system: "sub" },
    { id: "pc_shared", label: "PC 4", sublabel: "Play & YouTube", type: "pc", x: 720, y: 410, system: "sub" },
    { id: "atem_l", label: "ATEM Mini Pro ISO", type: "atem", x: 920, y: 220, system: "sub" },
    { id: "multi_mon", label: "Multi Monitor", type: "device", x: 1100, y: 170, system: "sub" },
    { id: "ssd", label: "SSD Recording", type: "device", x: 1100, y: 290, system: "sub" },
  ],
  connections: [
    { from: "pc1", to: "atem_r", label: "HDMI In 1", type: "hdmi" },
    { from: "pc2", to: "atem_r", label: "HDMI In 2", type: "hdmi" },
    { from: "pc3", to: "atem_r", label: "HDMI In 3", type: "hdmi" },
    { from: "stream_bridge", to: "atem_r", label: "HDMI In 4", type: "hdmi" },
    { from: "atem_r", to: "ipad", label: "Type-C (MV)", type: "usb" },
    { from: "atem_r", to: "bidi", label: "HDMI Out", type: "hdmi" },
    { from: "bidi", to: "screen", label: "HDMI", type: "hdmi" },
    { from: "sdi_conv", to: "atem_l", label: "HDMI In 1", type: "hdmi" },
    { from: "cam1", to: "holly_tx", type: "hdmi" },
    { from: "holly_tx", to: "holly_rx", label: "Wireless", type: "wireless" },
    { from: "holly_rx", to: "atem_l", label: "HDMI In 2", type: "hdmi" },
    { from: "insta360", to: "pc_shared", label: "USB", type: "usb" },
    { from: "pc_shared", to: "atem_l", label: "HDMI In 3", type: "hdmi" },
    { from: "atem_l", to: "multi_mon", label: "HDMI (MV)", type: "hdmi" },
    { from: "atem_l", to: "ssd", label: "Type-C (ISO)", type: "usb" },
    { from: "bidi", to: "sdi_conv", label: "SDI Line", type: "sdi" },
    { from: "atem_l", to: "stream_bridge", label: "Ethernet", type: "ethernet" },
    { from: "pc_shared", to: "youtube", label: "Stream", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Main System (Left)", x: 30, y: 50, width: 530, height: 400 },
    { id: "sub", title: "Sub System (Right)", x: 570, y: 50, width: 660, height: 400 },
  ],
}

// Template 2: Simple Streaming Setup
const simpleStreaming: DiagramTemplate = {
  id: "simple-streaming",
  name: "Simple Streaming",
  description: "Basic single PC streaming setup with camera and mic",
  nodes: [
    { id: "pc", label: "Streaming PC", type: "pc", x: 300, y: 200, system: "main" },
    { id: "camera", label: "Camera", sublabel: "Webcam", type: "device", x: 100, y: 120, system: "main" },
    { id: "mic", label: "Microphone", sublabel: "USB", type: "device", x: 100, y: 220, system: "main" },
    { id: "capture", label: "Capture Card", type: "converter", x: 100, y: 320, system: "main" },
    { id: "console", label: "Game Console", type: "device", x: 100, y: 420, system: "main" },
    { id: "monitor", label: "Monitor", type: "device", x: 500, y: 120, system: "main" },
    { id: "headphones", label: "Headphones", type: "device", x: 500, y: 220, system: "main" },
    { id: "stream_deck", label: "Stream Deck", type: "device", x: 500, y: 320, system: "main" },
    { id: "twitch", label: "Twitch", sublabel: "Live", type: "cloud", x: 700, y: 200, system: "external" },
  ],
  connections: [
    { from: "camera", to: "pc", label: "USB", type: "usb" },
    { from: "mic", to: "pc", label: "USB", type: "usb" },
    { from: "console", to: "capture", label: "HDMI", type: "hdmi" },
    { from: "capture", to: "pc", label: "USB 3.0", type: "usb" },
    { from: "pc", to: "monitor", label: "HDMI", type: "hdmi" },
    { from: "pc", to: "headphones", label: "Audio", type: "audio" },
    { from: "stream_deck", to: "pc", label: "USB", type: "usb" },
    { from: "pc", to: "twitch", label: "Stream", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Streaming Setup", x: 70, y: 70, width: 560, height: 420 },
  ],
}

// Template 3: Podcast Setup
const podcastSetup: DiagramTemplate = {
  id: "podcast-setup",
  name: "Podcast Studio",
  description: "Multi-person podcast setup with audio mixer",
  nodes: [
    { id: "mixer", label: "Audio Mixer", sublabel: "Rodecaster", type: "atem", x: 350, y: 200, system: "main" },
    { id: "mic1", label: "Host Mic", sublabel: "XLR", type: "device", x: 100, y: 100, system: "main" },
    { id: "mic2", label: "Guest Mic 1", sublabel: "XLR", type: "device", x: 100, y: 200, system: "main" },
    { id: "mic3", label: "Guest Mic 2", sublabel: "XLR", type: "device", x: 100, y: 300, system: "main" },
    { id: "mic4", label: "Guest Mic 3", sublabel: "XLR", type: "device", x: 100, y: 400, system: "main" },
    { id: "hp1", label: "Host HP", type: "device", x: 200, y: 100, system: "main" },
    { id: "hp2", label: "Guest HP 1", type: "device", x: 200, y: 200, system: "main" },
    { id: "hp3", label: "Guest HP 2", type: "device", x: 200, y: 300, system: "main" },
    { id: "hp4", label: "Guest HP 3", type: "device", x: 200, y: 400, system: "main" },
    { id: "recorder", label: "SD Recorder", type: "device", x: 550, y: 150, system: "main" },
    { id: "pc", label: "Recording PC", type: "pc", x: 550, y: 270, system: "main" },
    { id: "camera", label: "PTZ Camera", type: "device", x: 750, y: 150, system: "sub" },
    { id: "atem", label: "ATEM Mini", type: "atem", x: 750, y: 270, system: "sub" },
    { id: "monitor", label: "Program Monitor", type: "device", x: 950, y: 200, system: "sub" },
    { id: "youtube", label: "YouTube", sublabel: "Podcast", type: "cloud", x: 950, y: 320, system: "external" },
  ],
  connections: [
    { from: "mic1", to: "mixer", label: "XLR", type: "audio" },
    { from: "mic2", to: "mixer", label: "XLR", type: "audio" },
    { from: "mic3", to: "mixer", label: "XLR", type: "audio" },
    { from: "mic4", to: "mixer", label: "XLR", type: "audio" },
    { from: "mixer", to: "hp1", label: "HP Out", type: "audio" },
    { from: "mixer", to: "hp2", label: "HP Out", type: "audio" },
    { from: "mixer", to: "hp3", label: "HP Out", type: "audio" },
    { from: "mixer", to: "hp4", label: "HP Out", type: "audio" },
    { from: "mixer", to: "recorder", label: "Line Out", type: "audio" },
    { from: "mixer", to: "pc", label: "USB", type: "usb" },
    { from: "camera", to: "atem", label: "HDMI", type: "hdmi" },
    { from: "pc", to: "atem", label: "HDMI", type: "hdmi" },
    { from: "mixer", to: "atem", label: "Audio In", type: "audio" },
    { from: "atem", to: "monitor", label: "HDMI Out", type: "hdmi" },
    { from: "atem", to: "youtube", label: "Stream", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Audio Setup", x: 70, y: 50, width: 560, height: 430 },
    { id: "sub", title: "Video Setup", x: 720, y: 100, width: 310, height: 280 },
  ],
}

// Template 4: Conference/Webinar Setup
const conferenceSetup: DiagramTemplate = {
  id: "conference-setup",
  name: "Conference Room",
  description: "Conference setup with multiple displays and video conferencing",
  nodes: [
    { id: "pc_presenter", label: "Presenter PC", type: "pc", x: 100, y: 150, system: "main" },
    { id: "pc_guest", label: "Guest PC", type: "pc", x: 100, y: 280, system: "main" },
    { id: "atem", label: "ATEM Mini Extreme", type: "atem", x: 300, y: 220, system: "main" },
    { id: "cam_front", label: "Front Camera", type: "device", x: 100, y: 400, system: "main" },
    { id: "cam_room", label: "Room Camera", type: "device", x: 300, y: 400, system: "main" },
    { id: "main_display", label: "Main Display", sublabel: "Projector", type: "device", x: 520, y: 100, system: "main" },
    { id: "confidence", label: "Confidence", sublabel: "Monitor", type: "device", x: 520, y: 220, system: "main" },
    { id: "multiview", label: "MultiView", type: "device", x: 520, y: 340, system: "main" },
    { id: "audio_mixer", label: "Audio Mixer", type: "device", x: 720, y: 150, system: "sub" },
    { id: "wireless_mic", label: "Wireless Mic", sublabel: "Handheld", type: "device", x: 720, y: 280, system: "sub" },
    { id: "lav_mic", label: "Lav Mic", sublabel: "Presenter", type: "device", x: 720, y: 380, system: "sub" },
    { id: "streaming_pc", label: "Streaming PC", type: "pc", x: 920, y: 150, system: "sub" },
    { id: "zoom", label: "Zoom", sublabel: "Meeting", type: "cloud", x: 920, y: 280, system: "external" },
    { id: "youtube", label: "YouTube", sublabel: "Live", type: "cloud", x: 920, y: 380, system: "external" },
  ],
  connections: [
    { from: "pc_presenter", to: "atem", label: "HDMI In 1", type: "hdmi" },
    { from: "pc_guest", to: "atem", label: "HDMI In 2", type: "hdmi" },
    { from: "cam_front", to: "atem", label: "HDMI In 3", type: "hdmi" },
    { from: "cam_room", to: "atem", label: "HDMI In 4", type: "hdmi" },
    { from: "atem", to: "main_display", label: "HDMI Out 1", type: "hdmi" },
    { from: "atem", to: "confidence", label: "HDMI Out 2", type: "hdmi" },
    { from: "atem", to: "multiview", label: "MV Out", type: "hdmi" },
    { from: "wireless_mic", to: "audio_mixer", label: "Audio", type: "audio" },
    { from: "lav_mic", to: "audio_mixer", label: "Audio", type: "audio" },
    { from: "audio_mixer", to: "atem", label: "Line In", type: "audio" },
    { from: "atem", to: "streaming_pc", label: "USB-C", type: "usb" },
    { from: "streaming_pc", to: "zoom", label: "Stream", type: "stream" },
    { from: "streaming_pc", to: "youtube", label: "Stream", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Video System", x: 70, y: 100, width: 560, height: 380 },
    { id: "sub", title: "Audio & Streaming", x: 690, y: 100, width: 310, height: 340 },
  ],
}

// Template 5: Live Event Multi-Cam
const liveEventSetup: DiagramTemplate = {
  id: "live-event",
  name: "Live Event Multi-Cam",
  description: "Multi-camera live event with SDI infrastructure",
  nodes: [
    { id: "cam1", label: "Camera 1", sublabel: "Wide", type: "device", x: 80, y: 100, system: "main" },
    { id: "cam2", label: "Camera 2", sublabel: "Close", type: "device", x: 80, y: 200, system: "main" },
    { id: "cam3", label: "Camera 3", sublabel: "Roaming", type: "device", x: 80, y: 300, system: "main" },
    { id: "sdi_conv1", label: "SDI to HDMI", type: "converter", x: 220, y: 100, system: "main" },
    { id: "sdi_conv2", label: "SDI to HDMI", type: "converter", x: 220, y: 200, system: "main" },
    { id: "wireless_rx", label: "Wireless RX", type: "device", x: 220, y: 300, system: "main" },
    { id: "atem", label: "ATEM Mini Extreme ISO", type: "atem", x: 400, y: 200, system: "main" },
    { id: "graphics_pc", label: "Graphics PC", type: "pc", x: 400, y: 350, system: "main" },
    { id: "hyperdeck", label: "HyperDeck", sublabel: "Recording", type: "device", x: 600, y: 100, system: "sub" },
    { id: "streaming_encoder", label: "Streaming", sublabel: "Encoder", type: "stream", x: 600, y: 220, system: "sub" },
    { id: "program_mon", label: "Program", sublabel: "Monitor", type: "device", x: 600, y: 340, system: "sub" },
    { id: "audio_board", label: "Audio Board", type: "device", x: 800, y: 150, system: "sub" },
    { id: "stage_audio", label: "Stage Audio", type: "device", x: 800, y: 280, system: "sub" },
    { id: "youtube", label: "YouTube", sublabel: "Live", type: "cloud", x: 800, y: 400, system: "external" },
  ],
  connections: [
    { from: "cam1", to: "sdi_conv1", label: "SDI", type: "sdi" },
    { from: "cam2", to: "sdi_conv2", label: "SDI", type: "sdi" },
    { from: "cam3", to: "wireless_rx", label: "Wireless", type: "wireless" },
    { from: "sdi_conv1", to: "atem", label: "HDMI In 1", type: "hdmi" },
    { from: "sdi_conv2", to: "atem", label: "HDMI In 2", type: "hdmi" },
    { from: "wireless_rx", to: "atem", label: "HDMI In 3", type: "hdmi" },
    { from: "graphics_pc", to: "atem", label: "HDMI In 4", type: "hdmi" },
    { from: "atem", to: "hyperdeck", label: "HDMI Out", type: "hdmi" },
    { from: "atem", to: "streaming_encoder", label: "USB-C", type: "usb" },
    { from: "atem", to: "program_mon", label: "MV Out", type: "hdmi" },
    { from: "audio_board", to: "atem", label: "Line In", type: "audio" },
    { from: "audio_board", to: "stage_audio", label: "Main Out", type: "audio" },
    { from: "streaming_encoder", to: "youtube", label: "RTMP", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Video Switching", x: 50, y: 50, width: 500, height: 380 },
    { id: "sub", title: "Output & Audio", x: 570, y: 50, width: 310, height: 380 },
  ],
}

// Template 6: Zoom Meeting/Webinar Setup
const zoomMeetingSetup: DiagramTemplate = {
  id: "zoom-meeting",
  name: "Zoom Meeting",
  description: "Professional Zoom meeting and webinar setup",
  nodes: [
    { id: "host_pc", label: "Host PC", sublabel: "Zoom", type: "pc", x: 350, y: 200, system: "main" },
    { id: "webcam", label: "Webcam", sublabel: "4K", type: "device", x: 100, y: 100, system: "main" },
    { id: "usb_mic", label: "USB Mic", sublabel: "Condenser", type: "device", x: 100, y: 200, system: "main" },
    { id: "capture", label: "Capture Card", type: "converter", x: 100, y: 300, system: "main" },
    { id: "doc_cam", label: "Document Camera", type: "device", x: 100, y: 400, system: "main" },
    { id: "main_monitor", label: "Main Monitor", sublabel: "Participants", type: "device", x: 550, y: 100, system: "main" },
    { id: "second_monitor", label: "Second Monitor", sublabel: "Share Screen", type: "device", x: 550, y: 220, system: "main" },
    { id: "speaker", label: "Speaker", type: "device", x: 550, y: 340, system: "main" },
    { id: "ring_light", label: "Ring Light", type: "device", x: 250, y: 100, system: "main" },
    { id: "atem", label: "ATEM Mini", sublabel: "Optional", type: "atem", x: 750, y: 150, system: "sub" },
    { id: "camera", label: "Camera", sublabel: "HDMI", type: "device", x: 750, y: 280, system: "sub" },
    { id: "slides_pc", label: "Slides PC", type: "pc", x: 750, y: 400, system: "sub" },
    { id: "zoom_cloud", label: "Zoom", sublabel: "Cloud", type: "cloud", x: 950, y: 200, system: "external" },
    { id: "recording", label: "Cloud Recording", type: "cloud", x: 950, y: 330, system: "external" },
  ],
  connections: [
    { from: "webcam", to: "host_pc", label: "USB", type: "usb" },
    { from: "usb_mic", to: "host_pc", label: "USB", type: "usb" },
    { from: "doc_cam", to: "capture", label: "HDMI", type: "hdmi" },
    { from: "capture", to: "host_pc", label: "USB 3.0", type: "usb" },
    { from: "host_pc", to: "main_monitor", label: "HDMI 1", type: "hdmi" },
    { from: "host_pc", to: "second_monitor", label: "HDMI 2", type: "hdmi" },
    { from: "host_pc", to: "speaker", label: "Audio", type: "audio" },
    { from: "camera", to: "atem", label: "HDMI In 1", type: "hdmi" },
    { from: "slides_pc", to: "atem", label: "HDMI In 2", type: "hdmi" },
    { from: "atem", to: "host_pc", label: "USB Webcam", type: "usb" },
    { from: "host_pc", to: "zoom_cloud", label: "Stream", type: "stream" },
    { from: "zoom_cloud", to: "recording", label: "Recording", type: "stream" },
  ],
  subgraphs: [
    { id: "main", title: "Basic Setup", x: 70, y: 50, width: 560, height: 430 },
    { id: "sub", title: "Advanced (Multi-Source)", x: 720, y: 100, width: 160, height: 380 },
  ],
}

// Template 7: Empty Template
const emptyTemplate: DiagramTemplate = {
  id: "empty",
  name: "Empty",
  description: "Start from scratch",
  nodes: [],
  connections: [],
  subgraphs: [],
}

export const diagramTemplates: DiagramTemplate[] = [
  dualAtemStudio,
  simpleStreaming,
  podcastSetup,
  conferenceSetup,
  liveEventSetup,
  zoomMeetingSetup,
  emptyTemplate,
]

export const getTemplateById = (id: string): DiagramTemplate | undefined => {
  return diagramTemplates.find((t) => t.id === id)
}

export const defaultTemplate = dualAtemStudio
