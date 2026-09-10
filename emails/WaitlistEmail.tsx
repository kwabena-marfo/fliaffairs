import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WaitlistEmailProps {
  name: string;
  email: string;
}

export default function WaitlistEmail({ name, email }: WaitlistEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New waitlist signup from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New waitlist signup</Heading>
          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Hr style={hr} />
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "32px",
  borderRadius: "12px",
  maxWidth: "480px",
};

const heading = {
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "16px",
};

const section = {
  marginTop: "8px",
};

const label = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  color: "#71717a",
  margin: "0 0 4px",
};

const value = {
  fontSize: "15px",
  color: "#18181b",
  margin: "0 0 12px",
};

const hr = {
  borderColor: "#e4e4e7",
  margin: "12px 0",
};
