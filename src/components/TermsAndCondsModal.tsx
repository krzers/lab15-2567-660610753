import { Button, Modal, Stack, Text } from "@mantine/core";
import { termsAndCondsProps } from "@lib/types";

export default function TermsAndCondsModal({
  opened,
  close,
}: termsAndCondsProps) {
  return (
    <Modal opened={opened} onClose={close} title="Terms and conditions">
      <Text color="dimmed">
        กฏข้อแรกก็คือห้ามทิ้ง
        <br />
        ข้อที่สองก็ยังห้ามทิ้ง
        <br />
        ข้อที่สามก็ยังห้ามทิ้ง ฉันไม่ใช่ถังขยะ
      </Text>
      <Stack align="center" mt="sm">
        <Button onClick={close}>Confirm</Button>
      </Stack>
    </Modal>
  );
}