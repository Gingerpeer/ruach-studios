import { router, publicProcedure } from '../trpc'
import { z } from "zod";


export const guestbookRouter = router({
  postMessage: publicProcedure
  .input(
    z.object({
    name: z.string(),
    message: z.string(),
  }),
  )
  .mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.guestbook.create({
        data: {
          name: input.name,
          message: input.message,
        },
      });
    } catch (error){
      console.log(error)
    }
  }),
})
  