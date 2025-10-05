import prisma from "@/lib/prisma";
import { Table, Box, Heading, Select, Text,Button } from "@radix-ui/themes";
import { updateBookingStatus } from "./actions/updateAction";
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const bookings = await prisma.bookings.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <Box p="6">
      <Heading mb="5">Booking Management</Heading>
      <Table.Root variant="surface" size="3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Booking Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Change Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookings.map((booking) => (
            <Table.Row key={booking.id}>
              <Table.RowHeaderCell>{booking.id}</Table.RowHeaderCell>
              <Table.Cell>{booking.userName}</Table.Cell>
              <Table.Cell>{booking.phoneNo}</Table.Cell>
              <Table.Cell>
                <Text weight="medium">{booking.status}</Text>
              </Table.Cell>
              <Table.Cell>
                {new Date(booking.bookingDate).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                <form action={updateBookingStatus}>
                  <input type="hidden" name="id" value={booking.id} />
                  <Select.Root defaultValue={booking.status} name="status">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="BOOKED">Booked</Select.Item>
                      <Select.Item value="IN_REVIEW">In Review</Select.Item>
                      <Select.Item value="CHECKED">Checked</Select.Item>
                      <Select.Item value="DECLINED">Declined</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <Button
                    type="submit"
                    className="ml-2 px-2 py-1 text-sm border rounded"
                  >
                    Update
                  </Button>
                </form>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
