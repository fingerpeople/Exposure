import { createSchema, Type, typedModel } from 'ts-mongoose'

export const status = ['draft', 'published', 'lock', 'pending_review', 'reject_review', 'deleted'] as const

export const reviewerSchema = createSchema({
  user_id: Type.objectId(),
  status: Type.string({
    enum: status,
    default: status[3]
  })
})

export const fileSchema = createSchema(
  {
    name: Type.string({ required: true }),
    file_name: Type.string({ default: '' }),
    file_path: Type.string({ default: '' }),
    type: Type.string({ required: true }),
    size: Type.number({ default: 0 }),
    permission_groups: Type.array().of(
      Type.objectId()
    ),
    reviewers: Type.array().of(
      Type.objectId()
    ),
    parent: Type.objectId(),
    parents: Type.array().of(
      Type.objectId()
    ),
    status: Type.string({
      enum: status,
      default: status[3]
    })
  },
  {
    timestamps: {
      createdAt: true,
      deletedAt: true
    }
  }
)

export default typedModel('Files', fileSchema)
