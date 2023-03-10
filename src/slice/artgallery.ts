import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

interface Modal {
  openGalleryModal: boolean
  openAddProjectsModal: boolean
  openDeleteModal?: boolean
  openEditProject?: boolean
}
interface Login {
  email: string
  password: string
}

interface List {
  id?: string
  name?: string
  thumbnail?: string
  media?: string[]
}

interface createProject {
  title?: string
  description?: string
  type?: string
  thumbnail?: any
  media?: []
  thumbnailImg?: string
}

interface Root {
  modals: Modal
  modalImagesList: List
  login: Login
  projectType: string
  newProject: createProject
  mediaList: string[]
  loading: boolean
}



const initialState: Root = {
  modals: {
    openGalleryModal: false,
    openAddProjectsModal: false,
    openDeleteModal: false,
    openEditProject: false
  },
  modalImagesList: {},
  login: {
    email: "",
    password: ""
  },
  projectType: "all",
  newProject:
  {
    title: "",
    description: "",
    type: "completed",
    thumbnail: {},
    media: [],
    thumbnailImg: "",
  },
  mediaList: [],
  loading: false
}


const slice = createSlice({
  name: 'artGallery',
  initialState,
  reducers: {
    openGalleryModal(state, action) {
      state.modals.openGalleryModal = action.payload
    },
    openAddProjectsModal(state, action) {
      state.modals.openAddProjectsModal = action.payload
    },
    openDeleteModal(state, action) {
      state.modals.openDeleteModal = action.payload
    },
    openEditProject(state, action) {
      state.modals.openEditProject = action.payload
    },
    modalImagesList(state, action) {
      state.modalImagesList = action.payload
    },
    login(state: any, action) {
      state.login[action.payload.key] = action.payload.value
    },
    setProjectType(state, action) {
      state.projectType = action.payload
    },
    createNewProject(state: any, action) {
      state.newProject[action.payload.key] = action.payload.value
    },
    setMedia(state, action) {
      state.newProject.media = action.payload
    },
    setThumbnailImage(state, action) {
      state.newProject.thumbnailImg = action.payload
    },
    setAssetFiles(state, action) {
      state.mediaList = [...state.mediaList, action.payload]
    },
    clearNewProjectFields(state) {
      state.newProject = {}
      state.mediaList = []
    },
    setLoading(state, action) {
      state.loading = action.payload
    }

  },
})

export const ArtGalleryActions = slice.actions

export const reducer = slice.reducer

export default slice
