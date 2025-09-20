// Simple in-memory store for verification codes
// In production, use a database or Redis for persistence

interface VerificationEntry {
  registrationId: string
  verificationCode: string
  email: string
  name: string
  passType: string
  amount: number
  collegeName: string
  phone: string
  createdAt: Date
  verified: boolean
}

class VerificationStore {
  private entries: Map<string, VerificationEntry> = new Map()

  // Store verification data
  store(data: Omit<VerificationEntry, "createdAt" | "verified">): void {
    this.entries.set(data.verificationCode, {
      ...data,
      createdAt: new Date(),
      verified: false,
    })
  }

  // Verify a code
  verify(code: string): VerificationEntry | null {
    const entry = this.entries.get(code.toUpperCase())
    if (entry && !entry.verified) {
      entry.verified = true
      return entry
    }
    return null
  }

  // Get entry by code (for admin purposes)
  getByCode(code: string): VerificationEntry | null {
    return this.entries.get(code.toUpperCase()) || null
  }

  // Get all entries (for admin purposes)
  getAllEntries(): VerificationEntry[] {
    return Array.from(this.entries.values())
  }

  // Check if code exists
  exists(code: string): boolean {
    return this.entries.has(code.toUpperCase())
  }
}

// Singleton instance
export const verificationStore = new VerificationStore()
