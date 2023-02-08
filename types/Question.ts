export interface IQuestion {
  id: number
  type: number
  question: string
  member_of_parliament_id: number
  targeted_group_id: number
  sector_id: number
  parliament_period_session_id: number
  group: ITargetedGroup
  mp: IMemberOfParliament
  description: string
  created_at: Date
}

export interface IMemberOfParliament {
  id: number
  name: string
  email: string
  age: number
  status: string
  gender: number
  special_seat: number
}

export interface ITargetedGroup {
  id: number
  name: string
}
