export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          project_url: string | null
          github_url: string | null
          technologies: string[]
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          project_url?: string | null
          github_url?: string | null
          technologies: string[]
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          project_url?: string | null
          github_url?: string | null
          technologies?: string[]
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          category: string
          name: string
          description: string
          technologies: string[]
          icon: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category: string
          name: string
          description: string
          technologies: string[]
          icon: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category?: string
          name?: string
          description?: string
          technologies?: string[]
          icon?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Project = Database['public']['Tables']['projects']['Row']
export type Skill = Database['public']['Tables']['skills']['Row']
export type ContactMessage = Database['public']['Tables']['contact_messages']['Row']