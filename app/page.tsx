import Image from "next/image";
import HaptixHeader from "../components/haptix-header";

export default function Home() {
  return (
    <main className="min-h-screen flex-col p-24">
      {/* <div className="z-10 w-full max-w-10xl items-center justify-between font-mono text-3xl lg:flex min-h-11">
        <h1> Welcome to the HaptiX Lab </h1>
      </div> */}
      <div className="z-5 w-full">
        <HaptixHeader />
      </div>
      <div>
      <p>
      We study and design interfaces between human users and machines. Our focus is on the mechanics that come into play when a human uses a manual control interface to control, interact with, and effect change in their environment. We do not generally think of machines as being wielded like tools, as many modern machines are designed to process information rather than mechanical work. But humans possess highly developed faculties for wielding tools—for harnessing the coupled dynamics of body and tool to produce a desired outcome. We believe these faculties can be used to advantage in the design of improved machine interfaces, even for machines intended primarily to process information.
      </p>
      <p>
      And so, we design, analyze, and build devices for use by human bodies.  Our current projects include upper limb exoskeleton devices, wearable robots for motor training and rehabilitation, and haptic devices for interface to remote and virtual environments.  We design each of these robotic devices to function as a conduit for the transfer of power and information between a human user and their environment. We aim to give human users the best possible means to carry out their intentions and express themselves through manual control.
      </p>
      <p>
      We have developed expertise in system identification, human motor behavior, fundamental limitations in multivariable control, nonlinear control, compliant mechanisms, and design for wearability. Our device designs span the gamut in the use of mechatronic sensors and actuators and smart materials, but are increasingly adopting fluid power and most recently soft actuator technology.  We are driving in these new directions to reach new levels of wearability and portability for our human interface robots.
      </p>

      </div>
    </main>
  );
}
