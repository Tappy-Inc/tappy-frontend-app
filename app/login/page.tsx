import SignInForm from "@/components/login/sign-in-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const login = async () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Tappy Inc. Philippines</CardTitle>
        <CardDescription>We make software as easy as one tap</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default login;
