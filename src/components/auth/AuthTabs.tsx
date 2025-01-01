import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import { SocialAuth } from './SocialAuth';

interface AuthTabsProps {
  onClose: () => void;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full max-w-md">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-50 p-1">
          <Tab className={({ selected }) =>
            `w-full rounded-lg py-2.5 text-sm font-medium leading-5
             ${selected 
               ? 'bg-white text-blue-600 shadow'
               : 'text-gray-600 hover:bg-white/[0.12] hover:text-blue-600'}`
          }>
            Login
          </Tab>
          <Tab className={({ selected }) =>
            `w-full rounded-lg py-2.5 text-sm font-medium leading-5
             ${selected
               ? 'bg-white text-blue-600 shadow'
               : 'text-gray-600 hover:bg-white/[0.12] hover:text-blue-600'}`
          }>
            Sign Up
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <LoginForm onClose={onClose} />
            <SocialAuth />
          </Tab.Panel>
          <Tab.Panel>
            <SignUpForm onClose={onClose} />
            <SocialAuth />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};