interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";
 
  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}

declare const settings: GameSettings;

settings.speed;
         
// This would need to be settings["username"];
// settings.username;

settings['username']