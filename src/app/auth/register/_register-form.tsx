"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <Card placeholder="card" color="transparent" shadow={false}>
      <Typography placeholder="title" variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography placeholder="" color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder="name"
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Name
          </Typography>
          <Input
            crossOrigin={"anonymous"}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder="title"
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Email
          </Typography>
          <Input
            crossOrigin={"anonymous"}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder="password"
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Password
          </Typography>
          <Input
            crossOrigin={"anonymous"}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          crossOrigin={"anonymous"}
          label={
            <Typography
              placeholder="policy"
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <Link
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button placeholder="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography
          placeholder="register"
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default RegisterForm;
